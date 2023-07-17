import {apiUnionEntryPoint} from "core/api/apiUnionEntryPoint";

const API_TOKEN = "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";

export const imageGeneratorApi = apiUnionEntryPoint.injectEndpoints({
    endpoints: (builder) => ({
        // getImageFromWord: builder.query({
        //     query: (word) => ({
        //         url: `https://api-inference.huggingface.co/models/prompthero/openjourney`,
        //         method: 'POST',
        //         headers: {
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${API_TOKEN}`,
        //         },
        //         responseType: 'blob',
        //         body: {inputs: word},
        //     }),
        // }),
    }),
});

// export const {useLazyGetImageFromWordQuery} = imageGeneratorApi;
