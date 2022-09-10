// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "spacemesh/v1/gateway_types.proto" (package "spacemesh.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Status } from "../../google/rpc/status";
/**
 * @generated from protobuf message spacemesh.v1.BroadcastPoetRequest
 */
export interface BroadcastPoetRequest {
    /**
     * @generated from protobuf field: bytes data = 1;
     */
    data: Uint8Array; // encoded poet proof
}
/**
 * @generated from protobuf message spacemesh.v1.BroadcastPoetResponse
 */
export interface BroadcastPoetResponse {
    /**
     * @generated from protobuf field: google.rpc.Status status = 1;
     */
    status?: Status;
}
// @generated message type with reflection information, may provide speed optimized methods
class BroadcastPoetRequest$Type extends MessageType<BroadcastPoetRequest> {
    constructor() {
        super("spacemesh.v1.BroadcastPoetRequest", [
            { no: 1, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<BroadcastPoetRequest>): BroadcastPoetRequest {
        const message = { data: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BroadcastPoetRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BroadcastPoetRequest): BroadcastPoetRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes data */ 1:
                    message.data = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BroadcastPoetRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes data = 1; */
        if (message.data.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.data);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spacemesh.v1.BroadcastPoetRequest
 */
export const BroadcastPoetRequest = new BroadcastPoetRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BroadcastPoetResponse$Type extends MessageType<BroadcastPoetResponse> {
    constructor() {
        super("spacemesh.v1.BroadcastPoetResponse", [
            { no: 1, name: "status", kind: "message", T: () => Status }
        ]);
    }
    create(value?: PartialMessage<BroadcastPoetResponse>): BroadcastPoetResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BroadcastPoetResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BroadcastPoetResponse): BroadcastPoetResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.rpc.Status status */ 1:
                    message.status = Status.internalBinaryRead(reader, reader.uint32(), options, message.status);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BroadcastPoetResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.rpc.Status status = 1; */
        if (message.status)
            Status.internalBinaryWrite(message.status, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spacemesh.v1.BroadcastPoetResponse
 */
export const BroadcastPoetResponse = new BroadcastPoetResponse$Type();
