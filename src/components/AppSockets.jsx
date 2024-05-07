import { useEffect, useState } from 'react';
import { REQUEST_URI } from '../libs/request';
import { io } from 'socket.io-client';

const socket = io(REQUEST_URI, {
    autoConnect: false
});

export function AppSockets() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [fooEvents, setFooEvents] = useState([]);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        function onFooEvent(value) {
            setFooEvents(previous => [...previous, value]);
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('foo', onFooEvent);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('foo', onFooEvent);
        };
    }, []);

    return (
        <div className="App">
            <p>State: {'' + isConnected}</p>;
            <ConnectionState isConnected={isConnected} />
            <Events events={fooEvents} />
            <ConnectionManager />
            <MyForm />
        </div>
    );
}



function ConnectionState({ isConnected }) {
    return <p>State: {'' + isConnected}</p>;
}

function Events({ events }) {
    return (
        <ul>
            {
                events.map((event, index) =>
                    <li key={index}>{event}</li>
                )
            }
        </ul>
    );
}


function ConnectionManager() {
    function connect() {
        socket.connect();
    }

    function disconnect() {
        socket.disconnect();
    }

    return (
        <>
            <button onClick={connect}>Connect</button>
            <button onClick={disconnect}>Disconnect</button>
        </>
    );
}



function MyForm() {
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);

        socket.emit('message', value, (callback) => {
            alert(callback)
            setIsLoading(false);
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <input onChange={e => setValue(e.target.value)} />

            <button type="submit" disabled={isLoading}>Submit</button>
        </form>
    );
}