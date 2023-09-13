import opentelemetry from "@opentelemetry/api";
import logger from '../../app/utils/logger'


export async function fetchGithubStars() {

    logger.info(`Info from Page Fetch Component`);
    logger.error('Error from Page Fetch Component')

    const tracer = opentelemetry.trace.getTracer('basic')
    const span = tracer.startSpan('fetchGithubStars')
    return fetch('https://api.github.com/repos/vercel/next.js', {
        next: {
            revalidate: 60,
        },
    })
        .then((res) => res.json())
        .then((data) => data.stargazers_count)
        .finally(() => {
            span.end()
        })
}