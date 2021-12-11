module.exports = mongoose => {
    const Point = mongoose.model(
        "point",
        mongoose.Schema(
            {
                title: String,
                longitude: String,
                latitude: String,
                description: String,
            },
            { timestamps: true }
        )
    );

    return Point;
};