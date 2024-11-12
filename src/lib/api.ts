// Define the PreviewTradeDto type
export type PreviewTradeDto = {
  previewID: string;
  accountCode: string;
  symbol: string;
  user: string;
};

// Define FinalPreviewSubmitType Interface
export type FinalPreviewSubmitType = {
  instrumentID: string;
  symbol: string;
  tradeActionPreviewResponseList: PreviewTradeDto[];
};

export const data: FinalPreviewSubmitType[] = [
  {
    instrumentID: "IDEA1",
    symbol: "IDEA",
    tradeActionPreviewResponseList: [
      {
        previewID: "123",
        accountCode: "IDEA1234",
        symbol: "IDEA",
        user: "TEST1",
      },
      {
        previewID: "9768",
        accountCode: "IDEA12342",
        symbol: "IDEA",
        user: "TEST2",
      },
    ],
  },
  {
    instrumentID: "TATA1",
    symbol: "TATA",
    tradeActionPreviewResponseList: [
      {
        previewID: "567",
        accountCode: "TATA5678",
        symbol: "TATA",
        user: "TEST2",
      },
      {
        previewID: "567624",
        accountCode: "TATA567812",
        symbol: "TATA",
        user: "TEST2",
      },
    ],
  },
];
