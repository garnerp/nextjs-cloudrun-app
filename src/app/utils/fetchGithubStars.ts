import opentelemetry from "@opentelemetry/api";
import logger from '../../app/utils/logger'
import { faro } from "@grafana/faro-web-sdk";


export async function fetchGithubStars() {

    logger.info(`Info from Page Fetch Component`);

    const tracer = opentelemetry.trace.getTracer('basic')
    const span = tracer.startSpan('fetchGithubStars')

    { cache: 'no-store' }


    return fetch('https://api.github.com/repos/vercel/next.js', {
        //next: {
        //    revalidate: 2,
        //},
        cache: 'no-store'  // this stop the entire page from getting cached I think.  Impacts logs and everything
    })
        .then((res) => res.json())
        .then((data) => data.stargazers_count)
        .finally(() => {
            span.end()
        })
}