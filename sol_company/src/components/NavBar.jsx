import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import { NavLink } from "react-router-dom"; // ✅ NavLink 사용

const Logo = styled("img")({
  height: 40,
  marginRight: 12,
});

function NavBar() {
  const menuItems = [
    { label: "스마트금융", path: "/" },
    { label: "세무", path: "/tax" },
    { label: "상생금융", path: "/finance" },
    { label: "금융상품", path: "/products" },
    { label: "연금", path: "/pension" },
    { label: "고객센터", path: "/customer" },
    { label: "은행소개", path: "/about" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#0076be",
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
          {menuItems.map((menu) => (
            <Button
              key={menu.label}
              component={NavLink}
              to={menu.path}
              end // 경로 정확히 일치할 때만 활성화
              style={({ isActive }) => ({
                color: isActive ? "#ffeb3b" : "white", // ✅ 활성화 시 노란색
                fontWeight: isActive ? "700" : "500",
                fontSize: "0.95rem",
                margin: "0 8px",
                borderBottom: isActive ? "2px solid #ffeb3b" : "none", // ✅ 밑줄 효과
              })}
            >
              {menu.label}
            </Button>
          ))}
        </Box>

        {/* 로그인 버튼 */}
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
