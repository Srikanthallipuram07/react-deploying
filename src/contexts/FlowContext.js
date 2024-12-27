import React, {createContext,useState,useContext, Children} from 'react';

const FlowContext = createContext();

export const useFlowState = () => {
    return useContext(FlowContext);
};

export const FlowProvider = ({ children }) => {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    return(
        <FlowContext.Provider value={{ nodes, setNodes, edges, setEdges }}>
            {children}
        </FlowContext.Provider>
    );
};