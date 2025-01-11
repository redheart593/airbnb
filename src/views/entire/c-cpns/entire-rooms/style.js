import styled from "styled-components";

export const RoomsWrapper = styled.div`
    position: relative;
  padding: 40px 20px;

  .list {
    display: flex;

  flex-wrap: wrap;
  }

  .title {
    margin-top: 30px;
    font-style: 22px;
    color: #222;
    font-weight: 700;
  }
  >.cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, .8);
  }
`

// import styled from "styled-components";

// export const HouseWrapper = styled.div`
//   display: flex;
//   padding: 40px 20px;
//   flex-wrap: wrap;
// `