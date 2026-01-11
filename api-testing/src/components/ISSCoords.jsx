import { useState, useEffect } from "react"

const ISSCoords = () => {
    const url = "http://api.open-notify.org/iss-now.json"
    const [ coords, setCoords ] = useState( {"latitude": "Loading...", "longitude": "Loading..."})
    const [ map_url, setMapUrl ] = useState()


    useEffect( () => {
        const controller = new AbortController()

        const getCoords = async () => {
            try {
                const response = await fetch(url, { signal: controller.signal } )
                if ( ! response.ok ) throw new Error("Couldn't get the response")
                const data = await response.json()
                setCoords( data.iss_position )
                setMapUrl( `https://mapy.com/cs/zakladni?x=${data.iss_position.longitude}&y=${data.iss_position.latitude}&z=4`)
            } catch (err) {
                if (err.name === 'AbortError' ) {
                console.log('Fetch sucessfully cancelled')
                } else {
                setCoords("Couldn't load the quote.")
                console.error("Network error:", err)
                }
            }
        }

        getCoords();

        return () => controller.abort()
    }, [])

    return(
        <>
            <p>Latitude: {coords.latitude}</p>
            <p>Longitude: {coords.longitude}</p>
            <a href={map_url} target="_blank">Open in Mapy.com</a>
        </>
    )  
}

export default ISSCoords