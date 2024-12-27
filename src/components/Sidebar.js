import React, {useState} from "react";
import { useFlowState } from "../contexts/FlowContext";

const Sidebar = () => {
    const {nodes , setNodes,edges,setEdges} = useFlowState();
    const [nodeLabel,setNodeLabel] = useState('');
    const [edgeSource,setEdgeSource] = useState('');
    const [edgeTarget,setEdgeTarget] = useState('');


const addNode = () => {
    const newNode = {
        id:(nodes.length + 1).toString(),
        data:{label:nodeLabel},
        position: {x:Math.random()*400,y:Math.random()*400}
    };
    setNodes([...nodes,newNode]);
};

const addEdge = () =>{
    const newEdge = {
        id: `e${edgeSource}-${edgeTarget}`,
        source:edgeSource,
        target:edgeTarget
    };
    setEdges([...edges,newEdge]);
};

return (
    <div> style={{ width: '300px', padding: '10px', borderRight: '1px solid #ddd'}}
        <h3>Node Controls</h3>
        <input 
            type="text"
            value={nodeLabel}
            onChange={(e) => setNodeLabel(e.target.value)}
            placeholder="Node Label"
        />
        <button onClick={addNode}>Add Node</button>

        <h3>Edge controls</h3>
        <input
        type="text"
        value={edgeSource}
        onChange={(e) => setEdgeSource(e.target.value)}
        placeholder="Source Node ID"
        />
        <input
        type="text"
        value={edgeTarget}
        onChange={(e) => setEdgeTarget(e.target.value)}
        placeholder="Target Node ID"
        />
        <button onClick={addEdge}>Add Edge</button>
    </div>
);
};

export default Sidebar;