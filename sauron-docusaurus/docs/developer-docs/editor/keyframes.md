---
sidebar_position: 1
---

# Keyframes
https://en.wikipedia.org/wiki/Key_frame

For a comprehensive grasp of the Sauron editor's functionality, keyframes play a pivotal role akin to those in
traditional video editing. Drawing parallels to keyframes in a typical video editing tool, we delve into their
significance and usage within Sauron:

## Making a new keyframe
Every keyframe adheres to the SauronKeyframe interface, mandating the provision of functions to obtain the timestamp 
and perform interpolation to the subsequent keyframe. In this context, the interpolation function is expected to yield
a HashMap encapsulating the keyframe demands, crucial for further understanding.

## Interpolation
Interpolation, a fundamental process, involves computing the keyframe's value at a given timestamp. This entails
calculating the temporal difference between the present keyframe and the following one, followed by determining the 
viewport's state during that specific time. An exemplar interpolation mechanism is showcased below through the Camera
Keyframe, offering valuable insights into its functionality:

```java
@Override
    public HashMap<Integer, KeyframeDemand> interpolateKeyframes(SauronKeyframe nextKeyframe) {
        HashMap<Integer, KeyframeDemand> interpolatedCameraLocations = new HashMap<>();
        CameraKeyframe nextCameraKeyframe = (CameraKeyframe) nextKeyframe;
        int framesBetweenKeyframes = nextCameraKeyframe.framePosition - framePosition;
        double xDifference = nextCameraKeyframe.x - x;
        double yDifference = nextCameraKeyframe.y - y;
        double zDifference = nextCameraKeyframe.z - z;
        double yawDifference = nextCameraKeyframe.yaw - yaw;
        double pitchDifference = nextCameraKeyframe.pitch - pitch;
        for (int i = 0; i < framesBetweenKeyframes; i++) {
            double x = this.x + (xDifference / framesBetweenKeyframes) * i;
            double y = this.y + (yDifference / framesBetweenKeyframes) * i;
            double z = this.z + (zDifference / framesBetweenKeyframes) * i;
            double yaw = this.yaw + (yawDifference / framesBetweenKeyframes) * i;
            double pitch = this.pitch + (pitchDifference / framesBetweenKeyframes) * i;
            interpolatedCameraLocations.put(framePosition + i, new CameraDemand(x, y, z, yaw, pitch));
        }
        return interpolatedCameraLocations;
    }
```

## Keyframe Demands
A keyframe demand represents a singular, interpolated frame between two keyframes of the same type. It issues directives on rendering the
viewport at a specified timestamp. A pertinent example can be found in the CameraDemand, a demand emanating from the
Camera Keyframe. Within this demand, crucial viewport information, such as position and rotation, is encapsulated.

```java title="sauron.editor.keyframe.demands.CameraDemand"
public class CameraDemand implements KeyframeDemand {
    public double x;
    public double y;
    public double z;
    public double yaw;
    public double pitch;

    public CameraDemand(double x, double y, double z, double yaw, double pitch) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.yaw = yaw;
        this.pitch = pitch;
    }

    @Override
    public void issue() {
        Camera camera = MinecraftUtils.getMinecraft().gameRenderer.getCamera();
        MinecraftUtils.getMinecraft().player.updatePositionAndAngles(x, y, z, (float) yaw, (float) pitch);
    }
}
```

As you can see, the `CameraDemand` contains the position & rotation of the camera. The `issue` method is called when
the demand is to be rendered. In this case, the demand is to be rendered by updating the player's position & rotation.
