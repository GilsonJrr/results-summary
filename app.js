var data = [{
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg",
        'color': 'hsl(0, 100%, 57%)',
        'bgColor': 'hsla(0, 100%, 67%, 0.096)',
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg",
        'color': 'hsl(39, 100%, 56%)',
        'bgColor': 'hsla(39, 100%, 56%, 0.092)',
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg",
        'color': 'hsl(166, 100%, 37%)',
        'bgColor': 'hsla(166, 100%, 37%, 0.092)',
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg",
        'color': 'hsl(234, 85%, 45%)',
        'bgColor': 'hsla(234, 85%, 45%, 0.095)',
    }
]

document.getElementById('dataMap').innerHTML = data.map(user =>
    `<div class="sectionCard" style="background-color: ${user.bgColor}">
        <img src= ${user.icon} />
            <h5 style="color: ${user.color}">${user.category}</h5>
            <div class="percentSection">
              <h5 style="color: hsl(224, 30%, 27%)">80</h5>
              <h5 style="color: hsla(224, 30%, 27%, 0.377)">/ 100</h5>
            </div>
    </div>`
).join('')