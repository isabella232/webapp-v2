import { EthNetworks } from './types';

interface EthNetworkVariables {
  contractRegistry: string;
  bntToken: string;
  ethToken: string;
  vBntToken: string;
  multiCall: string;
  liquidityProtectionToken: string;
  converterContractForMaths: string;
  governanceContractAddress: string;
  etherscanUrl: string;
  alchemyKey: string;
  govToken: string;
}
export const ethToken: string = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
export const zeroAddress: string = '0x0000000000000000000000000000000000000000';
export const wethToken: string = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';

export const getNetworkVariables = (
  ethNetwork: EthNetworks
): EthNetworkVariables => {
  switch (ethNetwork) {
    case EthNetworks.Mainnet:
      return {
        contractRegistry: '0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4',
        bntToken: '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C',
        govToken: '0x48Fb253446873234F2fEBbF9BdeAA72d9d387f94',
        ethToken,
        vBntToken: '0x48Fb253446873234F2fEBbF9BdeAA72d9d387f94',
        liquidityProtectionToken: ethToken,
        multiCall: '0x5Eb3fa2DFECdDe21C950813C665E9364fa609bD2',
        converterContractForMaths: '0xe870d00176b2c71afd4c43cea550228e22be4abd',
        governanceContractAddress: '0x892f481bd6e9d7d26ae365211d9b45175d5d00e4',
        etherscanUrl: 'https://etherscan.io/',
        alchemyKey: process.env.REACT_APP_ALCHEMY_MAINNET || '',
      };
    case EthNetworks.Ropsten:
      return {
        contractRegistry: '0xA6DB4B0963C37Bc959CbC0a874B5bDDf2250f26F',
        bntToken: '0xF35cCfbcE1228014F66809EDaFCDB836BFE388f5',
        govToken: '0x83ec8129b1f54ba5b0f47bd902a79c803e20a249',
        ethToken,
        vBntToken: '0x83ec8129b1f54ba5b0f47bd902a79c803e20a249',
        liquidityProtectionToken: ethToken,
        multiCall: '0xf3ad7e31b052ff96566eedd218a823430e74b406',
        converterContractForMaths: '0x9a36b31ca768a860dab246cf080e7f042d1b7c0f',
        governanceContractAddress: '0x161f28A417361961E946Ae03EF0A425008b7F01B',
        etherscanUrl: 'https://ropsten.etherscan.io/',
        alchemyKey: process.env.REACT_APP_ALCHEMY_ROPSTEN || '',
      };
    default:
      throw new Error('Information not stored');
  }
};

export const UNLIMITED_WEI =
  '115792089237316195423570985008687907853269984665640564039457584007913129639935';

export const NULL_APPROVAL_CONTRACTS = [
  '0x8a9c67fee641579deba04928c4bc45f66e26343a',
  '0x309627af60f0926daa6041b8279484312f2bf060',
  '0x4fabb145d64652a948d72533023f6e7a623c7c53',
  '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
  '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
  '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c',
  '0xd26114cd6ee289accf82350c8d8487fedb8a0c07',
  '0x1b22c32cd936cb97c28c5690a0695a82abf688e6',
  '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
  '0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc',
  '0xaaaf91d9b90df800df4f55c205fd6989c977e73a',
  '0x340d2bde5eb28c1eed91b2f790723e3b160613b7',
  '0x27f610bf36eca0939093343ac28b1534a721dbb4',
  '0xf6b55acbbc49f4524aa48d19281a9a77c54de10f',
  '0x4ceda7906a5ed2179785cd3a40a69ee8bc99c466',
  '0x4aac461c86abfa71e9d00d9a2cde8d74e4e1aeea',
  '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
  '0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26',
  '0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3',
  '0xd341d1680eeee3255b8c4c75bcce7eb57f144dae',
  '0xe3818504c1b32bf1557b16c238b2e01fd3149c17',
  '0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244',
  '0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5',
  '0x780116d91e5592e58a3b3c76a351571b39abcec6',
  '0xb056c38f6b7dc4064367403e26424cd2c60655e1',
  '0x4162178b78d6985480a308b2190ee5517460406d',
  '0x0cf0ee63788a0849fe5297f3407f701e122cc023',
  '0xc20464e0c373486d2b3335576e83a218b1618a5e',
  '0xcbee6459728019cb1f2bb971dde2ee3271bc7617',
  '0x6888a16ea9792c15a4dcf2f6c623d055c8ede792',
  '0x744d70fdbe2ba4cf95131626614a1763df805b9e',
  '0x28dee01d53fed0edf5f6e310bf8ef9311513ae40',
  '0x84f7c44b6fed1080f647e354d552595be2cc602f',
  '0xef2463099360a085f1f10b076ed72ef625497a06',
  '0xf04a8ac553fcedb5ba99a64799155826c136b0be',
  '0xf433089366899d83a9f26a773d59ec7ecf30355e',
  '0xa485bd50228440797abb4d4595161d7546811160',
  '0x9214ec02cb71cba0ada6896b8da260736a67ab10',
  '0x960b236a07cf122663c4303350609a66a7b288c0',
  '0x47ec6af8e27c98e41d1df7fb8219408541463022',
  '0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6',
  '0x6c37bf4f042712c978a73e3fd56d1f5738dd7c43',
  '0x0cb20b77adbe5cd58fcecc4f4069d04b327862e5',
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  '0xb8baa0e4287890a5f79863ab62b7f175cecbd433',
  '0x0000000000085d4780b73119b644ae5ecd22b376',
  '0x26e75307fc0c021472feb8f727839531f112f317',
  '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671',
  '0xc011a72400e58ecd99ee497cf89e3775d4bd732f',
  '0xb1a5b7e9a268742b9b5d2455ffcf43babc6929ba',
  '0x5e6f3bc1186132565946fea123181529e7aeafd8',
  '0xd758b77bcc792afd58857e1d5c610ae649fdee6b',
  '0x57ab1e02fee23774580c119740129eac7081e9d3',
  '0x0316eb71485b0ab14103307bf65a021042c6d380',
  '0x45804880de22913dafe09f4980848ece6ecbaf78',
  '0x67abf1c62d8acd07ada35908d38cd67be7dfeb36',
  '0xee4dc4c5ca843b83035d8e5159ac1bd1b4ebdff5',
  '0x94a2aaa374a8f2d52dad24330c8a0ec2934700ae',
  '0x7db5454f3500f28171d1f9c7a38527c9cf94e6b2',
  '0xb5f278ee11811efec0692ec61b1e9f9984f2de11',
  '0x0ecdd783dc7bf820614044b51862ed29714d2ba5',
  '0x37be876ef051eb8eddd0745107c5222d8ca8ec60',
  '0x83ee8ec605c0ae3d7f1c9e360ab45a6c1c033ab9',
  '0xe7845a9679dad2b1ccce49d5f0239d1c528f7a40',
  '0x623fa86c0e010fe4701cedf294c9cddb8f4f26e6',
  '0x8ae56a6850a7cbeac3c3ab2cb311e7620167eac8',
  '0x7ce0641d19095ed3226fc5222836901bce41585d',
  '0xcb0ad5f479812edd6e2ced1cfe621bf39d7e9158',
  '0xdac17f958d2ee523a2206206994597c13d831ec7',
  '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
  '0x79a91ccaaa6069a571f0a3fa6ed257796ddd0eb4',
  '0x107721d9aa07d9de8f2cc9545e0c9346a9bb503b',
  '0x4a527d8fc13c5203ab24ba0944f4cb14658d1db6',
  '0xa1d65e8fb6e87b60feccbc582f7f97804b725521',
  '0x0ae055097c6d159879521c384f1d2123d1f195e6',
  '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
  '0x0b244e01b1b0c9a959b3b0bc19e3852395319876',
  '0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44',
];
