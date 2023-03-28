import { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
import {
    NodeTracerProvider,
    SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-node'

// You can use gRPC exporter instead
//import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'

import { TraceExporter } from "@google-cloud/opentelemetry-cloud-trace-exporter";

// Next.js expects you to use to register TraceProvider. It won't work if you use NodeSDK.
// We use registered provider to create traces inside of Next.js internals.
const provider = new NodeTracerProvider({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: 'next-app',
    }),
})

// Initialize the exporter. When your application is running on Google Cloud,
// you don't need to provide auth credentials or a project id.
const exporter = new TraceExporter();

//provider.addSpanProcessor(new SimpleSpanProcessor(new OTLPTraceExporter({})))

provider.addSpanProcessor(new SimpleSpanProcessor(exporter))

// Make sure to register you provider
provider.register()