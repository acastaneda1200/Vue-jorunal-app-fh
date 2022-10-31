export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore dignissimos perferendis facere quam molestias ratione delectus, fugiat aperiam voluptatibus voluptatem exercitationem inventore, minima quae dolor esse magni alias quis!",
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust",
            picture: null,
        },
        {
            id: new Date().getTime() + 3000,
            date: new Date().toDateString(),
            text: "adipisicing elit. Iust",
            picture: null,
        }
    ]
})