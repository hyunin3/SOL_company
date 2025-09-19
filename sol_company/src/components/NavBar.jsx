import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";

const Logo = styled("img")({
  height: 40,
  marginRight: 12,
});

function NavBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#1565c0",
        boxShadow: 2,
      }}
    >
      <Toolbar>
        {/* 로고 + 회사명 */}
        <Logo src="/src/assets/white_logo.png" alt="logo" />
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", mr: 5 }}
        >
          SOL COMPANY
        </Typography>

        {/* 메뉴 버튼 영역 */}
        <Box sx={{ flexGrow: 1 }}>
          {["스마트금융", "세무", "상생금융", "금융상품", "고객센터", "은행소개"].map(
            (menu) => (
              <Button
                key={menu}
                sx={{
                  color: "white",
                  fontWeight: "500",
                  fontSize: "0.95rem",
                  mx: 1,
                }}
              >
                {menu}
              </Button>
            )
          )}
        </Box>

        {/* 로그인 버튼 (우측 끝) */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ color: "white" }}>
            <LoginIcon />
          </IconButton>
          <Typography variant="body1" sx={{ color: "white", fontWeight: "500" }}>
            로그인
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
