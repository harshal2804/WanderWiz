import axios from "axios"

const placeMainDetails = async (placeApi, fsq_id) => {
    return await axios.get(`${placeApi}${fsq_id}?fields=description%2Ctel%2Cemail%2Cwebsite%2Csocial_media%2Chours%2Chours_popular%2Crating%2Cstats%2Cpopularity%2Cprice%2Cname%2Clocation%2Ccategories%2Crelated_places%2Ctimezone%2Cdistance`, {
        headers: {
            accept: "application/json",
            authorization: `${process.env.VITE_API_AUTH}`
        }
    })
}

const placePhotos = async (placeApi, fsq_id) => {
    return await axios.get(`${placeApi}${fsq_id}/photos?sort=POPULAR`, {
        headers: {
            accept: "application/json",
            authorization: `${process.env.VITE_API_AUTH}`
        }
    });
}

const placeTips = async (placeApi, fsq_id) => {
    return await axios.get(`${placeApi}${fsq_id}/tips?fields=id%2Ccreated_at%2Ctext%2Cagree_count%2Cdisagree_count&sort=POPULAR`, {
        headers: {
            accept: "application/json",
            authorization: `${process.env.VITE_API_AUTH}`
        }
    });
}

export default function placeService() {
    const placeDetails = async (fsq_id) => {
        const placeApi = process.env.VITE_PLACE_API;
        const place = await Promise.all([
            placeMainDetails(placeApi, fsq_id),
            placePhotos(placeApi, fsq_id),
            placeTips(placeApi, fsq_id)
        ]).then(([placeMainDetails, placePhotos, placeTips]) => {
            return {
                ...placeMainDetails.data,
                photos: placePhotos.data,
                tips: placeTips.data
            }
        }).catch((err) => {
            // console.log(err)
        })
        return place;
    }

    return {
        placeDetails
    }
}