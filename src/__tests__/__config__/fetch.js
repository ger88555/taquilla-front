/**
 * Wrap data into a fetch response
 */
export const generateResponse = (data) => (
    {
        json: (async () => data)
    }
)