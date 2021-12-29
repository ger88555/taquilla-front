/**
 * Wrap data into a fetch response
 */
export const generateResponse = (data, status = 200) => (
    {
        status,
        data
    }
)