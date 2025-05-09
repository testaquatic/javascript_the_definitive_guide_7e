let o = {
    m() {
        let self = this;
        console.log(this === o);
        f();

        function f() {
            console.log(self === o);
            console.log(this === o);
        }

        const f2 = () => {
            console.log(self === o);
            console.log(this === o);
        };

        f2();
    },
};

o.m();
