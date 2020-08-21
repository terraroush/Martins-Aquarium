const careCollection = [
    {
        tip: "Check salinity daily"
    },
    {
        tip: "Change water weekly"
    },
    {
        tip: "Maintain filtration"
    },
    {
        tip: "Make saltwater as needed"
    },
    {
        tip: "Scrub algae weekly"
    },
    {
        tip: "Test water quality regularly"
    },
    {
        tip: "Feed fish daily"
    },
    {
        tip: "Check welfare daily"
    }
]

export const useCare = () => {
    return careCollection.slice()
}