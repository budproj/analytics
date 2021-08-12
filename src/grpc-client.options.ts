import path from "path";

import { ClientOptions, Transport } from "@nestjs/microservices";

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: "analytics",
    protoPath: path.join(__dirname, "./analytics/analytics.proto"),
    url: "localhost:50052",
  },
};
