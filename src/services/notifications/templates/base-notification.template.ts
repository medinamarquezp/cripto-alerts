/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */

const copy = `&copy; ${(new Date()).getFullYear()} - Cripto Alerts`;

export const template = (content: string) => (`
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<!-- Sets size and scale of the viewport. -->
	<meta name="viewport" content="width=device-width" initial-scale="1">

	<!-- IE=Edge makes good things happen on Windows Phones. (https://www.emailonacid.com/blog/article/email-development/demystifying-meta-tags-in-email) -->
	<!--[if !mso]>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<![endif]-->

	<!-- Disables auto-scaling in iOS Mail 10. (https://litmus.com/blog/9-things-you-need-to-know-about-email-in-ios-10) -->
	<meta name="x-apple-disable-message-reformatting">

	<!-- Will display in auto-preview area in some clients. -->
	<title>🚨 Cripto Alerts</title>
    
	<!-- Desktop Outlook defaults to Times New Roman. Forces a less obscene fallback font. -->
	<!--[if mso]>
		<style>
			* { font-family: sans-serif !important; }
		</style>
	<![endif]-->

	<!-- Webfont reference. For current support: http://stylecampaign.com/blog/2015/02/webfont-support-in-email -->
	<!--[if !mso]><!-->
		<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet">
	<!--<![endif]-->

	<style>

		/* Box sizing. Gets decent support. (https://freshmail.com/developers/best-practices-for-email-coding) */
		*,
		*:after,
		*:before {
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
		}

		/* Prevents small text resizing. */
		* {
			-ms-text-size-adjust: 100%;
			-webkit-text-size-adjust: 100%;
		}

		/* Basic reset. Removes default spacing around emails in various clients. (https://templates.mailchimp.com/development/css/reset-styles) */
		html,
		body,
		.document {
			width: 100% !important;
			height: 100% !important;
			margin: 0;
			padding: 0;
		}

		/* Improves text rendering when supported. */
		body {
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
		}

		/* Centers email to device width in Android 4.4. (https://blog.jmwhite.co.uk/2015/09/19/revealing-why-emails-appear-off-centre-in-android-4-4-kitkat) */
		div[style*="margin: 16px 0"] {
			margin: 0 !important;
		}

		/* Removes added spacing within tables in Outlook. (https://templates.mailchimp.com/development/css/client-specific-styles) */
		table,
		td {
			mso-table-lspace: 0pt;
			mso-table-rspace: 0pt;
		}

		/* Removes added spacing within tables in WebKit. */
		table {
			border-spacing: 0;
			border-collapse: collapse;
			table-layout: fixed;
			margin: 0 auto;
		}

		/* Responsive images. Improves rendering of scaled images in IE. */
		img {
			-ms-interpolation-mode: bicubic;
			max-width: 100%;
			border: 0;
		}

		/* Overrules triggered links in iOS. */
		*[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: none !important;
		}

		/* Overrules triggered links in Gmail. */
		.x-gmail-data-detectors,
		.x-gmail-data-detectors *,
		.aBn {
			border-bottom: 0 !important;
			cursor: default !important;
		}

		/* Adds hover effects on buttons. */
		.btn {
			-webkit-transition: all 200ms ease;
			transition: all 200ms ease;
		}
		.btn:hover {
			background-color: #222222;
			border-color: #222222;
		}

		/* Media queries o' doom. */
		@media screen and (max-width: 450px) {

			/* Transitions container to a fluid layout. */
			.container {
				width: 100%;
				margin: auto;
			}

			/* Collapses table cells into full-width rows. */
			.stack {
				display: block;
				width: 100%;
				max-width: 100%;
			}

			/* Centers and expands CTA. */
			.btn {
				display: block;
				width: 100%;
				text-align: center;
			}

		}
	</style>
</head>
<body bgcolor="#E8ECF1">

	<!-- Preheader text. Visible in inbox preview, not in email body. -->
	<div style="display: none; max-height: 0px; overflow: hidden;">
		<!-- Preheader message here -->
	</div>

	<!-- Hack to manage presentation of preheader text. (https://litmus.com/blog/the-little-known-preview-text-hack-you-may-want-to-use-in-every-email) -->
	<div style="display: none; max-height: 0px; overflow: hidden;">&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>

	<table bgcolor="#E8ECF1" role="presentation" aria-hidden="true" cellspacing="0" cellpadding="0" border="0" align="center" class="document">
		<tr>
			<td valign="top">

				<!-- Main -->
				<table role="presentation" aria-hidden="true" cellspacing="0" cellpadding="0" border="0" align="center" width="500" class="container">
					<tr>
						<td bgcolor="#ffffff">
							<table role="presentation" aria-hidden="true" cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
								<tr>
									<td style="padding: 20px;">
										<table role="presentation" aria-hidden="true" cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
											<tr>
												<td style="padding-bottom: 15px; font-family: 'Source Sans Pro', sans-serif; font-size: 26px; line-height: 34px; color: #1B2733;">
                          🚨 Cripto Alerts
												</td>
											</tr>
											<tr>
												<td style="padding-bottom: 15px; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 24px; color: #1B2733;">
													${content}
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>

				<!-- Footer -->
				<table role="presentation" aria-hidden="true" cellspacing="0" cellpadding="0" border="0" align="center" width="450" class="container">
					<tr>
						<td align="center" style="font-family: 'Source Sans Pro', sans-serif; font-size: 11px; line-height: 16px; padding-top: 20px; color: #aaaaaa;">
							${copy} 
						</td>
					</tr>
					<tr>
						<td align="center" style="font-family: 'Source Sans Pro', sans-serif; font-size: 11px; line-height: 16px; padding-bottom: 20px; color: #aaaaaa;">
							<!-- Unsubscribe link -->
							<unsubscribe>Unsubscribe from these emails.</unsubscribe>
						</td>
					</tr>
				</table>

			</td>
		</tr>
	</table>
</body>
</html>
`);
