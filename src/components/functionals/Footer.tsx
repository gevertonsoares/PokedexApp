import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box color={"black"} component='footer' marginY={5}  sx={{
        width: '100%',
        position: 'static',
        bottom: 0,
        left: 0,
        backgroundColor: 'inherit',
        padding: 2,
      }}>
      <Typography variant='caption' component='p' align='center'>
        Copyright &copy;
        <Typography variant='caption' component='small'>DevelopedBy Geverton Soares</Typography>
        {` ${new Date().getFullYear()}.`}
      </Typography>
    </Box>
  );
}