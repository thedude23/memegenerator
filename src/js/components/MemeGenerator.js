import React, { useState, useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import { useForm } from 'react-hook-form'


function MemeGenerator() {
    // setting states
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")
    const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg") // we start with some random meme/img
    const [allMemeImgs, setAllMemeImgs] = useState([])

    // API call to get the images
    useEffect(() => {
        const api = "https://api.imgflip.com/get_memes"
        fetch(api)
            .then(res => res.json())
            .then(res => {
                const {memes} = res.data
                setAllMemeImgs(memes)
                console.log(memes)
            })
    }, [])

    // function for when clicking on submit button
    function handleSubmit(e) {
        e.preventDefault() // we dont want to really submit the form
        const randNum = Math.floor(Math.random() * allMemeImgs.length) // getting a random integer/index in the allMemeImgs array // 1-100
        const randMemeImg = allMemeImgs[randNum].url // getting the random meme img from that index (e.g. 7)
        setRandomImg(randMemeImg) // setting randomImg to that random meme img (randMemeImg)
    }

    // needed for form (React Hook Form: https://react-hook-form.com/)
    const { register, watch, errors } = useForm()
    // const onSubmit = data => { console.log(data) }

    return (
        <div>
            <form className="meme-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Top Text" name="topText" defaultValue="" ref={register({required: true, minLength: 2})} />
                {errors.topText && "This is required"}
                {/* {errors.topText && errors.topText.type === "minLength" && "Min length: 2"} */}
                <br />
                <input type="text" placeholder="Bottom Text" name="bottomText" defaultValue="" ref={register({required: true})} />
                {errors.bottomText && "This is required"}
                <br />
                <button>Generate</button>
            </form>

            <div className="meme">
                <img src={randomImg} alt="" />
                <h2 className="top">{watch("topText")}</h2>
                <h2 className="bottom">{watch("bottomText")}</h2>
            </div>
        </div>
    )

}

export default MemeGenerator