let  user = {
    name: 'Masha',
    age: 21
};

let userCopy = {...user};

let numbers = [1, 2, 3];

let numbersCopy = [...numbers];

let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};

let user1Copy = {
    ...user1,
    location:{...user1.location}
}

let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

let user2Copy = {
    ...user2,
    skills: [...user2.skills]
}

const array = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]

let arrayCopy = array.map(el => ({...el}))

let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};

let user4Copy = {
    ...user4,
    studies: {
        ...user4.studies,
        exams:{
            ...user4.studies.exams,
        }
    }
}

let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8},
            { programming: true, mark: 4},
        ]
    }
};

let user5Copy = {
    ...user5,
    studies: {
        ...user5.studies,
        department: {
            ...user5.studies.department
        },
        exams: user5.studies.exams.map(exam => ({ ...exam }))
    }
};

let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
        { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Ivanov ',
		    degree: 'PhD'
		    }
	    },
        { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Petrov',
		    degree: 'PhD'
		    }
	    },
        ]
    }
};
 
let user6Copy = {
    ...user6,
    studies:{
        ...user6.studies,
        exams: user6.studies.exams.map(exam => ({
            ...exam,
            professor: {...exam.professor},
        }))
    }
}

let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Petrov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	    },
        { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Ivanov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		    }
	    },
        ]
    }
};

let user7Copy = {
    ...user7,
    studies: {
        ...user7.studies,
        department: {...user7.studies.department},
        exams: user7.studies.exams.map(exam => ({
            ...exam,
            professor: {
                ...exam.professor,
                articles: exam.professor.articles.map(article => ({...article}))
            }
        }))
    }
};

let store ={
    state: {
        profilePage:{
            posts:[
                {id: 1, massage: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1},
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Viktor'},
            ],
            messages:[
                {id: 1, message: 'hi'},
                {id: 2, message: 'hi hi'},
                {id: 3, message: 'hi hi hi'},
            ],
        },
        sidebar:[],
    },
}

let storeCopy = {
    state: {
        ...store.state,
        profilePage: {
            ...store.state.profilePage,
            posts: store.state.profilePage.posts.map(post => ({ ...post })),
        },
        dialogsPage: {
            ...store.state.dialogsPage,
            dialogs: store.state.dialogsPage.dialogs.map(dialog => ({ ...dialog })),
            messages: store.state.dialogsPage.messages.map(message => ({ ...message })),
        },
        sidebar: [...store.state.sidebar],
    },
};

console.log(numbersCopy);
console.log(userCopy);
console.log(user1Copy);
console.log(user2Copy);
console.log(user4Copy);
console.log(user5Copy);
console.log(user6Copy);
console.log(user7Copy);
console.log(storeCopy);

console.log("")

user5Copy.studies.department.group = 12;
user5Copy.studies.exams[1].mark = 10;
console.log(user5Copy);

user6Copy.studies.exams[0].professor.name = "Gleb Glebich";
console.log(user6Copy);

user7Copy.studies.exams[1].professor.articles[1].pagesNumber = 3;
console.log(user7Copy);

storeCopy.state.dialogsPage.messages = storeCopy.state.dialogsPage.messages.map(function(m){
    return m = {id: m.id, message: "Hello"};
});
console.log(storeCopy);

console.log("")
console.log(user5);
console.log(user6);
console.log(user7);
console.log(store);

