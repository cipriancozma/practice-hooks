import React from 'react'

function Promises() {
    // const myPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("I have succeded")
    //     }, 1000)
    // })

    // myPromise.then(value => console.log(value))
    // console.log("promise", myPromise)


    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => response.json())
    //     .then(users => {
    //         const firstUser = users[0];
    //         console.log(firstUser)
    //         return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`)
    //     })
    //     .then(response => response.json())
    //     .then(posts => console.log(posts))


    const myAsyncFunc = async () => {
        const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await usersResponse.json()
        const secondUser = await users[1]
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${secondUser.id}`)
        const posts = await postResponse.json();
        console.log(posts)
    }

    // myAsyncFunc()

    // Memoization === Caching ->  way to speed up programs
    // const addTo80 = (num) => {
    //     return num + 80;
    // }

    // addTo80(5)

    let cache = {};
    const memoizedAddTo80 = (num) => {
        if(num in cache) {
            return cache[num]
        } else {
            cache[num] = num + 80
            return cache[num];
        }
    }

    // console.log(memoizedAddTo80(5));

    // currying
    const curriedFunction = (a) => (b) => a * b;
    // curriedFunction(5)(2)

    // es6 classes
    class Elf {
        constructor(name, weapon) {
            this.name = name;
            this.weapon = weapon;
        }

        attack() {
            return `attack with ${this.weapon}`
        }
    }

    const peter = new Elf("Peter", 'stones');
    console.log(peter.attack());

    return (
        <div>
            
        </div>
    )
}

export default Promises
