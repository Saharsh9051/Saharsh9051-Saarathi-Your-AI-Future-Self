import axios from 'axios';

const generateAIResponse = async (goal) => {
  
  return {
    overview: `This is an overview for ${goal}`,
    fullStrategy: `Step-by-step strategy for ${goal}`,
    flowchart: `Flowchart for ${goal}`,
    treeStructure: `Tree structure for ${goal}`
  };
};

export default generateAIResponse;
