import { User } from "./users.js";
import { Group } from "./group.js";
import { Channel } from "./channel.js";
import { Connection } from "./connection.js";
import { ConnectionChannel } from "./connection_channel.js";

User.belongsToMany(Group , {through: Connection , foreignKey: "user_id"})
Group.belongsToMany(User , {through: Connection , foreignKey: "group_id"})

User.belongsToMany(Channel , { through: ConnectionChannel , foreignKey: "user_id"})
Channel.belongsToMany(User , {through : ConnectionChannel , foreignKey: "channel_id"})

await User.sync({alter: true})
await Group.sync({alter: true})
await Channel.sync({alter: true})
export {User , Group ,  Channel , Connection , ConnectionChannel}
