

export function PatternCard({pattern}) {
    return (
        <div key={pattern._id} className="bg-primary rounded-xl shadow-lg">
            <img src={pattern.imageURL} alt={pattern.patternTitle} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-foreground font-semibold">
                    {pattern.patternTitle}
                </h3>
                <p className="text-primary-foreground">
                    {pattern.patternDesigner}
                </p>
            </div>
        </div>

    )
}