/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sftp.m;
import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;
/**
 *
 * @author CE
 */
public class SFTPConection {
    private JSch mJschSession = null;
    private Session mSSHSession = null;
    private ChannelSftp mChannelSftp = null;
    
    public boolean connect(String strHostAddress, int iPort, String strUserName, String strPassword) {
		boolean blResult = false;

		try {
			//creating a new jsch session
			this.mJschSession = new JSch();
			
			//set sftp server no check key when login
			java.util.Properties config = new java.util.Properties();
			config.put("StrictHostKeyChecking", "no");
			this.mJschSession.setConfig(config);

			//creating session with user, host port
			this.mSSHSession = mJschSession.getSession(strUserName, strHostAddress, iPort);
			
			//set password
			this.mSSHSession.setPassword(strPassword);
			
			//connect to host
			this.mSSHSession.connect();
			
			//open sftp channel
			this.mChannelSftp = (ChannelSftp) this.mSSHSession.openChannel("sftp");
			
			//connect to sftp session
			this.mChannelSftp.connect();
			if (this.mChannelSftp != null) {
				blResult = true;
			}
		} catch (Exception exp) {
			exp.printStackTrace();
		}
		return blResult;
    }
    
    public boolean uploadFile(String strLocalFile, String strSftpFile) {
		boolean blResult = false;

		try {
			this.mChannelSftp.put(strLocalFile, strSftpFile);
			blResult = true;
		} catch (Exception exp) {
			exp.printStackTrace();
		}
		return blResult;
    }
    
    public void close() {
		try {
			this.mChannelSftp.disconnect();
		} catch (Exception exp) {

		}

		try {
			this.mSSHSession.disconnect();
		} catch (Exception exp) {

		}

		this.mChannelSftp = null;
		this.mSSHSession = null;
		this.mJschSession = null;
    }
}
