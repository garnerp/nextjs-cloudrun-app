export function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        // We use this instrumentation for easier debugging with this test.
        // We want this test to be executable with `pnpm next-with-deps`.
        console.log("1")
        require('./instrumentation-node').register()
    }
}
