import React, {useEffect} from "react";
import {ReactFlow ,addEdge,Handle}from 'react-flow-renderer';
import { useFlowState } from "../contexts/FlowContext";



const DiagramFlow = () => {
    const {nodes,setNodes , edges , setEdges} = useFlowState();

    useEffect(() => {
        fetch('/metadata.json')
            .then(response => response.json())
            .then(data => {
                setNodes(data.nodes);
                setEdges(data.edges);
            });
    },[setNodes,setEdges]);

    return (
        <div style = {{height : '100vh'}}>
            <ReactFlow nodes={nodes} edges={edges} />
        </div>
    );
};

export default DiagramFlow;