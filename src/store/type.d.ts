interface ISample {
    id: number;
    title: string;
    body: string;
  }
  
  type Sampletate = {
    sample: ISample[];
  };
  
  type SampleAction = {
    type: string;
    article: ISample;
  };
  
  type DispatchType = (args: SampleAction) => SampleAction;
  