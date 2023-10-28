const root = ReactDOM.createRoot(document.getElementById("root"));

const parentDiv = React.createElement("div", { className: "parent" },
    [
        React.createElement("h1", { className: "family" }, "Happy Family ❤️")
    ],
    
    [
        React.createElement("div", { className: "parent-one" },
            [
                React.createElement("h1", { className: "parent-title" }, "I am Head of Family 🧞‍♂️"),
                React.createElement("p", {}, "Barir Korta")
            ]
        ),
        React.createElement("div", { className: "parent-two" },
            [
                React.createElement("h1", { className: "parent-title" }, "I am second head of Family  🧞‍♀️"),
                React.createElement("p", {}, "Barir second Korta")
            ]
        )
    ]
)

root.render(parentDiv)