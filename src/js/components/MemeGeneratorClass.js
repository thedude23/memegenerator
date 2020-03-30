import React, { Component } from "react"
import ReactDOM from "react-dom"

class MemeGeneratorClass extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            // loading: false,
            allMemeImgs: [],
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        // this.setState({loading: true})
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => {
                const {memes} = res.data
                this.setState({
                    allMemeImgs: memes // returns all memes
                })
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        // get a random int (index in the array)
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)

        // get the meme from that index
        // set `randomImg` to the `.url` of the random item I grabbed
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({
            randomImg: randMemeImg
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Top Text" name="topText" value={this.state.topText} onChange={this.handleChange} />
                    <br />
                    <input type="text" placeholder="Bottom Text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange} />
                    <br />
                    <button>Generate</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGeneratorClass