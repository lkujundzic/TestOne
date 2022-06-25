import axios from "axios";
const BASE_URL = "https://api.github.com/gists";

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/vnd.github.v3+json",
    },
    transformResponse: [
        function (data) {
            let response;

            try {
                response = JSON.parse(data);
            } catch (err) {
                response = {
                    message: "Not a valid response.",
                };
            }

            if (Array.isArray(response)) {
                response = response.map((item) => {
                    let keys = Object.keys(item.files);
                    let filename = keys.length ? item.files[keys[0]].filename : "--No files--";

                    return {
                        id: item.owner.id,
                        avatar_url: item.owner.avatar_url,
                        filename: filename,
                    };
                });
            }

            return response;
        },
    ],
});
