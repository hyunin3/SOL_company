import NavBar from "../components/NavBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function MainPage() {
  return (
    <>
      <NavBar />
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          은행 메인 페이지
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          여기서 주요 서비스(계좌조회, 송금 등)를 소개할 수 있어요.
        </Typography>
      </Box>
    </>
  );
}

export default MainPage;
