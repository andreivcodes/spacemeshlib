// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "spacemesh/v1/node.proto" (package "spacemesh.v1", syntax proto3)
// tslint:disable
import { ErrorStreamResponse } from "./node_types";
import { ErrorStreamRequest } from "./node_types";
import { StatusStreamResponse } from "./node_types";
import { StatusStreamRequest } from "./node_types";
import { UpdatePoetServerResponse } from "./node_types";
import { UpdatePoetServerRequest } from "./node_types";
import { ShutdownResponse } from "./node_types";
import { ShutdownRequest } from "./node_types";
import { SyncStartResponse } from "./node_types";
import { SyncStartRequest } from "./node_types";
import { StatusResponse } from "./node_types";
import { StatusRequest } from "./node_types";
import { BuildResponse } from "./node_types";
import { VersionResponse } from "./node_types";
import { Empty } from "../../google/protobuf/empty";
import { EchoResponse } from "./node_types";
import { EchoRequest } from "./node_types";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
/**
 * @generated ServiceType for protobuf service spacemesh.v1.NodeService
 */
export const NodeService = new ServiceType("spacemesh.v1.NodeService", [
    { name: "Echo", options: {}, I: EchoRequest, O: EchoResponse },
    { name: "Version", options: {}, I: Empty, O: VersionResponse },
    { name: "Build", options: {}, I: Empty, O: BuildResponse },
    { name: "Status", options: {}, I: StatusRequest, O: StatusResponse },
    { name: "SyncStart", options: {}, I: SyncStartRequest, O: SyncStartResponse },
    { name: "Shutdown", options: {}, I: ShutdownRequest, O: ShutdownResponse },
    { name: "UpdatePoetServer", options: {}, I: UpdatePoetServerRequest, O: UpdatePoetServerResponse },
    { name: "StatusStream", serverStreaming: true, options: {}, I: StatusStreamRequest, O: StatusStreamResponse },
    { name: "ErrorStream", serverStreaming: true, options: {}, I: ErrorStreamRequest, O: ErrorStreamResponse }
]);
