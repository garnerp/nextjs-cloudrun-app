import { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
import {
    AlwaysOnSampler,
    BatchSpanProcessor,
    NodeTracerProvider,
    SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-node'

// You can use gRPC exporter instead
//import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
import { TraceExporter } from "@google-cloud/opentelemetry-cloud-trace-exporter";

// Next.js expects you to use to register TraceProvider. It won't work if you use NodeSDK.
// We use registered provider to create traces inside of Next.js internals.

export function register() {
    // Next.js expects you to use to register TraceProvider. It won't work if you use NodeSDK.
    // We use registered provider to create traces inside of Next.js internals.

    const provider = new NodeTracerProvider({
        sampler: new AlwaysOnSampler(),
        resource: new Resource({
            [SemanticResourceAttributes.SERVICE_NAME]: 'g-next-app',
        }),
    })

    provider.addSpanProcessor(new BatchSpanProcessor(new TraceExporter()));

    // Make sure to register you provider
    provider.register()
}