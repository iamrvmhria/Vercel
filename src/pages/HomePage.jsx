import React from "react";
import Section from "../components/Section";


const HomePage = () => {
    return (
        <main
            style={{
                width: "100vw",
                height: "100vh",
                overflowY: "scroll",
                scrollSnapType: "y mandatory",
                scrollBehavior: "smooth",
            }}
        >
            <Section
                imageUrl="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                caption="Beautiful Mountain View"
            />
            <Section
                imageUrl="https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=mujiCtVk5QA697SD3d8V8BGmd91-8HlxCNHkolEA0Bo="
                caption="Moraine Lake Sunrise"
            />
            <Section
                imageUrl="https://static.vecteezy.com/system/resources/thumbnails/049/855/296/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg"
                caption="Serene Nature View"
            />
            <Section
                imageUrl="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                caption="Beautiful Mountain View"
            />
            <Section
                imageUrl="https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=mujiCtVk5QA697SD3d8V8BGmd91-8HlxCNHkolEA0Bo="
                caption="Moraine Lake Sunrise"
            />
        </main>
    );
};

export default HomePage;
