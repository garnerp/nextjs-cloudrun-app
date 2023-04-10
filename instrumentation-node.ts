// instrumentation.node.ts
import { trace, context } from '@opentelemetry/api'
import { NodeSDK } from '@opentelemetry/sdk-node'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
import { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
import { AlwaysOnSampler, SimpleSpanProcessor, BatchSpanProcessor } from '@opentelemetry/sdk-trace-node'

//import { Resource } from '@opentelemetry/resources'
//import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
/*
import {
    AlwaysOnSampler,
    BatchSpanProcessor,
    NodeTracerProvider,
    SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-node'
*/

import { TraceExporter } from "@google-cloud/opentelemetry-cloud-trace-exporter";

const sdk = new NodeSDK({
    sampler: new AlwaysOnSampler(),
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: 'garner-app',
    }),
    //spanProcessor: new SimpleSpanProcessor(new TraceExporter()),
    spanProcessor: new BatchSpanProcessor(new TraceExporter()),
})
sdk.start()

/*

// You can use gRPC exporter instead
//import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'

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
*/