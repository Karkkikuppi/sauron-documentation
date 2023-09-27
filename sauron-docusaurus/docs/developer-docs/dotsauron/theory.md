---
sidebar_position: 1
---
# The Basics
The .sauron file format is the standard format utilized for all Sauron recordings. This format, essentially an 
SQLite database, is designed with simplicity in mind. It encapsulates packet data and relevant metadata crucial 
for Sauron recordings.

## Structure
The .sauron file is organized into three main tables: recording, metadata, and keyframes. The recording table
comprehensively stores the packet data.

### `recording`
The recording table primarily encompasses timestamp data (measured in milliseconds from the replay start),
a unique packet identifier, and the raw packet data stored as a binary large object (BLOB).

![img/dotsauron/recording_table_structure](/img/dotsauron/theory/recording_table_structure.png)

### `metadata`
The `metadata` table isn't implemented yet.

### `keyframes`
The `keyframes` table isn't implemented yet.

## Reconstructing Packets
Dotsauron can reconstruct packets from raw binary data. The `dotsauron.packets.PacketMap#deserializePacket`
method facilitates packet deserialization by utilizing packet IDs and binary data. For most use cases, utilizing 
`StoredPacket` is recommended, as it conveniently combines packet data and timestamp information. The `StoredPacket`
can then be effectively applied in the network handler using `StoredPacket#applyPacket`.

## Writing Packets to the Database
To persist packets into the database, the SauronRecording#writePacket method is employed. This method receives a 
Minecraft packet, automatically optimizing and forwarding it to the database writer thread pool.


:::danger scuffed system

In case you attempt to write a packet lacking an assigned ID in the packet map, the mentioned method will fail.
This issue is currently being addressed and will be resolved shortly.

:::