import { useState, useEffect } from 'react'

const KanyeQuotes = () => {
    const [quote, setQuote] = useState( "Loading..." )

    useEffect( () => { 
        const controller = new AbortController()

        const getQuote = async () => {
        try { 
            const response = await fetch( "https://api.kanye.rest", { signal: controller.signal } )
            if ( !response.ok ) throw new Error("Server error")
            const data = await response.json()
            
            setQuote( data.quote )
        } catch (err) {
            if (err.name === 'AbortError' ) {
            console.log('Fetch sucessfully cancelled')
            } else {
            setQuote("Couldn't load the quote.")
            console.error("Network error:", err)
            }
        }
    }

    getQuote();

    return () => controller.abort()

  }, [])

  return (
    <q>{quote}</q>
  )
}

export default KanyeQuotes