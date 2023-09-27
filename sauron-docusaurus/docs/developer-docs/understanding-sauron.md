---
sidebar_position: 1
---
# Understanding Sauron
To help with the project, you must first understand some internal concepts:

## Packet recorder
Sauron, much like ReplayMod is a packet recorder that records (most) incoming packets from a Minecraft server. The data
is then stored using the `.sauron` file format. `.sauron` is actually just a sqlite database, read more about it [here](/docs/developer-docs/dotsauron/theory.md).

## Packet player
When a user wants to play back a recording, Sauron changes the client network state, overriding the packet listener, and then
plays back the entire packet dump.