/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sftp;
import sftp.m.SFTPConection;
/**
 *
 * @author CE
 */
public class SFTP {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        SFTPConection sftpBean = new SFTPConection();

		boolean blResult = sftpBean.connect("10.150.13.7", 22, "bastiaan", "userdesbas.10");

		if (blResult) {
			System.out.println("Connect successed");
			
			//now we will try to download file
                        blResult = sftpBean.uploadFile("C:\\Tomcat 6.0\\webapps\\GobMXJavaEnvironment\\reportespdf\\Rpt_03043_26371_01.pdf", "/home/bastiaan/03043/");
			if(blResult) {
				System.out.println("upload successed");
			}
			else {
				System.out.println("download failed");
			}                      
			sftpBean.close();
		} else {
			System.out.println("Connect failed.");
		}
    }
    
}
