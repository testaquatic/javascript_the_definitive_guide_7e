export default function loggingProxy(o, objname) {
    const handlers = {
        get(target, property, receiver) {
            console.log(`Handler get(${objname},${property.toString()})`);

            let value = Reflect.get(target, property, receiver);

            if (Reflect.ownKeys(target).includes(property) && (
                typeof value === 'object' || typeof value === 'function'
            )) {
                return loggingProxy(value, `${objname}.${property.toString()}`);
            }

            return value;
        },

        set(target, prop, value, receiver) {
            console.log(`Handler set(${objname},${prop.toString()},${value}`);
            return Reflect.set(target, prop, value, receiver);
        },

        apply(target, receiver, args) {
            console.log(`Handler ${objname}(${args})`);
            return Reflect.apply(target, receiver, args);
        },

        construct(target, args, receiver) {
            console.log(`Handler ${objname}(${args})`);
            return Reflect.construct(target, args, receiver);
        }
    };

    Reflect.ownKeys(Reflect).forEach(handlerName => {
        if (!(handlerName in handlers)) {
            handlers[handlerName] = function (target, ...args) {
                console.log(`Handler ${handlerName}(${objname},${args})`);
                return Reflect[handlerName](target, ...args);
            };
        }
    });

    return new Proxy(o, handlers);
};

