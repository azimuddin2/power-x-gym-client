const { useEffect } = require("react")

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Power x-gym`;
    }, [title])
}

export default useTitle;