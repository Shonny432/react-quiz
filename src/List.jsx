const items = [
    {
        task:"learn react",
        isCompleted: false
    },
    {
        task:"learn english",
        isCompleted: true
    },
    {
        task:"learn css",
        isCompleted: true
    },
]

export const List = () => {
    return (
        <div>
            {items.map((item, index) => {
                return (
                    <section key={index} className={item.isCompleted ? "completed" : ""}>
                        <h2>{item.task}</h2>
                    </section>
                )
            })}
        </div>
    )
}