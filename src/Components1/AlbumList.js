/*
//jsonplaceholderdan photos ları çekip axios ile çekip görsel tasarladım.
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import SingleAlbum from "./SingleAlbum";

const AlbumList = () => {
    const [album,setAlbum] = useState([])

    useEffect (() =>{
        const fetchalbum = async () => {
            const respons = await axios.get("https://jsonplaceholder.typicode.com/photos")
            setAlbum(respons.data)
        }

        fetchalbum()
    }, [])
    
    return(
        <div className="album-list">
            <ul>
                {album.map((album) => (
                    <li>
                        <SingleAlbum album={album} key={album.id}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default AlbumList
*/