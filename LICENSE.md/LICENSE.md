
<!DOCTYPE html>

<!--Here's a worked example of HTML and CSS from Lab 1!
	HTML consists of a hierarchy of elements.
	
	Each element has an opening tag and (most of the time) a closing tag.
	For example, the whole document is enclosed in the html element, delimited by the <html> and </html> tags.
	You can also close tags immediately using a slash before the > symbol: A newline is represented by <br />.

	Each tag can have attributes set as name="value" pairs.
	For example, the image element needs a source URL for the image file: <img src="dog.jpg" />
-->
<link rel="stylesheet" type="text/CSS" href="style.CSS" >

<html>
<head>
	<!-- The title shows up in the browser toolbar -->
	<title>Noura Home page </title>
</head>

<body>
	<!--A header for the page-->
	<h1>Noura Abdullah Alqhtani</h1>

	<!--My photo-->
	<img id="photo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8ODw8NEA4QEBUPEA8PEhAQDxAPERAQFhEWFhYWFhUYHSggGBslGxYTIzEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0fIB4rLS0tLSsrLS0tLS0tLS0tKy0rLS0tLS0rLS0tLTctLS03NystLSs3Ky0tKy0rKzcrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcFBggEAwL/xABNEAACAQMBBQMFCgYRBQAAAAAAAQIDBBEFBgcSITETQVEiYXGBkRQjMjVScnOhstEVQmKUwcIIFyUzNENTVGODkpOxs7TS8SREo6Th/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAiEQEAAwACAgICAwAAAAAAAAAAAQIRAyESMSIyQXEEE1H/2gAMAwEAAhEDEQA/ALxAAAAAQiQABBIAhEkEgAAAAAAAACGSAAAAhEgAAABBIAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMVfbSWFvUdGveW9KaSbhUqwhJJ9OTZ8Vtfpj6ahav8Ar6f3gZok8djqdvcJujXp1VHq6c1PHpwetACT8Tmopyk0kurfJI8FbXbOHw7qjHHXiqRWBEaMiSYentTp0pRhG+tpSlJRjFVoOUpPoks9TLpgSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAp7ffsLTrUq2s06ko1KUafawlzhOmmo5XemslI2cFnuOot6y/cTUfoP14nK9spS4uFN8MXKWO6Kxl/WVWcXSVlbu9oHY3NOo23CfvVWOesW8J+lPD9p0RTmpJSTymsprvRx5Y3riX9uc2nVzbSs5yXaW/OHNtyov7nletHTky0aq9etWFdUFUhKnLpNOLxyeCj96GnO0rOmpNxqR7SLfLCy1iXj0L1Kh3zfwmgsfxD9Xlszhn5Yis5LF7pNgqN5GOqV5y96r+804PhXHTkvKk+9Z7i8kjR9zcOHSYL+nuX/AOVm7kW9yWnZfoHh1LVra1jx3FxSox8ak4w/x6mC/bF0bOPwjQ9s8e3BLMltRJi9K2gs7z+D3VGt5oTTfs6mSyGP0D4u5gnhzimu5ySY900/lx/tIY3H2B+YzT5pprxTyfmVWK6tL0tIMfQHy7eHy4+1Ewqxl0afoeRjcfQg+dS4hHlKUV6ZJHxnqNCPwq1Ncs85xXI3JMl6weW01CjW4uyrU6nDji7OcZ49OOgvb+jQjx1atOlH5VScYL2sxj1AxFvtPYVZKEL22lJvCUa0G2/BczLICQea8vqVCLnVqwppd85KK+swdbbzSofCv6Pq4pL6kbktyWygw+k7UWF4+G3vKFV/JhUXF/ZfMy6ZjEggAapvW+JNR+g/Xic/bprWncatb21WPFCvTuaU4+KdCX3HQO9b4k1H6D9eJQO5v49sPO6y/wDXqGwMVtToVXS7ytZVMvspeRPDSqU3zjJer60z37Ha9OwuqN3Dn2cvKius4PlKPPxWS5t9OySvbWN7ThKVW05tQS4p2+c1Es96WZL0HP8ARiuco5xl4z1x3Zx3lVl3p8ox15o+p07yhSuaTzCrBTj4rPc/Oirt8lVRvLdPvt37ONmO3G7TOnVnpdSS4avFVoZfSoucoetc/Uz9b9anDe2ndm2nz/rP/ptYyyIp8sb1umlnS4cv464/zGYzeZtzUtFO0s03WwlOthONHPPCT6yx7D6bqryNHQncS6Up3c36Izb/AEFUT1GdxVnVm/Kq1HOXPvcs/pS9RfHSL2nWePcsJp+lXWp3lO345VKtabXHVlKWO+Um30wi06e5GKpL90Jdr8rsV2efm5zj1mU3ZaHGFzUuXwuUaeItJY8p82WaZyx4WyD+yfw5i1LRKunXM6Em41KUk1OEmsrqmn9ZZGwG8Ccp07K9bk5yVOnX5Zz0UZ+Oflec/W+C0Ua1tX4U3UpVaTznqmmn6ebK9p0WpJrKaaafg+5nSIi9WzbY7bzvM2adCpLUIVHKNxUxKD6wm49U+9cuhqFvHpzks4XRvHPuy/8AktDaSTvNItqkubl2Mm/ykmn+k0mGmxTXlPHesZaXf6S+H69qpfpZ2wDzYUs/KqfbZ89stnvdUHWjNxlThyj+LJJuTXp6ns2OpuNnST7nP7RlL5e9VPmT+yzyzOX6Rvy2FM2lZxlzfD3vn3/pN22Dq8dSq+nkR5Zbw8s06nZScOPGccpPC655d5tm7uOK1dfkQ5etnt5fpL13zwllNsdJ4qdS6jJqVKm24vmnFJt+sqnUrtVKc+afkSePMi7No/4HdfQVfss53vvgNN93Rd/Tk/McOG85jP41trOvfsRtX+Cre7jRoupcXU4dlHhbjFJPDwucnlvyVz5GM2u0fVm1e6hSrPtmvLmsxjyWFwrlD0G4bkNKpVbq4upxTlbxgqTa+DKfEpP045esuDWtLp3lvWtanwa0JQfLms9686ZytOWcr2itnMGztri6tmv5xb55f0iLK2q3gXzuLi3pcNCFKpUpZilKpPhk1xcT6dO7xM3p26ajQqU6nu2rLs6kKii6UEm4vPifbUd18K9WtWd5KPa1J1OHsU+Fyk314uZcWpvabXrMtM2Y2NuNaU7qpcunTVRx4pqVWpUkuuMvklnqfrbTdfUsrare0bvtVQg6k6c6fBLhXVxknjkufQt/ZrRo6fa0rSMuNU1LMscPFKUnJvGXjmz9bR0lOyu4SWVK3rRa8zpsi3JMyiLzE9OSpzWYyg5qSy5POOfdwtczojc3tVPUbF060nKtaSVOcnjM4NPs5ed4TTfmOcFJYLd/Y5y9+1JZ5dnbPHn4qhlnXk9LyBAIefWqb1viTUfoP14lA7nPj3T/AJ1b/T1C/t63xJqP0H68Sgdznx7p/wA6t/p6hsDqiSTWHzycz71NnPwbqU1Tgo0LlKvRUViK7pwS7sSzy8Gjpk1LeVsnHVbGdKKSrUs1KEsc1NLnHPcpLl7BE4qlslzdp2oToVKdak8TpSVSD8GnldDe96urQv1pd7DHvtrPiSazCopx4oPwaeSt1GVOcoTTjKLlCcXycZJ4afrR7o158MI8csQy4rLxFvGcL1L2HTdemI2dXBsrLGyN2/yb3/MZVNJtf8lybubB3Wzda2XWs72mn15ucsfWUq04OUJJpxbi14NPDz6zaT2U9yubcnVk/dcW84VHCznGXMtNFMbkL5RurihJ86lKDj5+BvP1Mucjk+zz8kZZom9ampUrbP8AKVPslbdm008dDf8AezfKLtKPfLtZ+pcK/SaZZ4k0muv+Pgengj4p7jtvOM6LbfPX25GIoQi8Jrn5km8m4XWncGnUaLWOBQb5c0+vqeWapWt5Qa8PHHIvhyYn9s1vmzOfc1POPxunpPfefvdT5kvssxuyrXuWGO6U16+IyV5JKnNvooSb9jPHb7z+xTfbuMH5uibfJdfUbFuvqN17nLb97hzfzpGKvbTts8KSlJdMJLBm92ls6da4ysZpwx3/AIzPbz/R2848cbjtCv8ApLn6Gp9lnPF7RzhYaSR0XrMc21deNKf2WVZS0J1INNLou7n6jj/HiJidOPl8Ix7dyVHg92+fsc+nyi0zT9gNLVt2+Px+DPqz95uJx5Yy0w52t5TqDCa/tPbWKxUk5yfSnTxKXr58ke7Wrz3Pb1ayWXCLaXTn0X1lL3dWdScqk3xSb4pSlzbZfBw/2T36Sy+qbyL+pJwtqNOnxcorgdWo89PX6jD6ha7UXdOc+O6hDgk5KVSNCMoY8pcK54xnqb1u10ujKnO9cIubqSpxbSfBFJZx4ZNu1utGna3M5NJRo1W34LgY5ZrFvGsKizj+dNrl4Ftfscv3/Ufo7b7UysasI46PPPrjHmwWh+x1/f8AUV/RW325kWdr/VeQAOevM0DfPrtvQ0m6tpVoKrcQjCnR4o9pJOccvh64S7yi92OoUrXWLG4rVI06cJzU6k2lGKlSnFNvuWWjoPaXdvpup3DurmnVlUcYxbhVdNYSwuSMX+0von8lX/OZmtWDQrQqRU4SjOMkmpRakmvFNH7ZitmdAoabbxtLaMo04uUkpSc3mTy+b87MsYKD32bIdhcx1OjFKncyxW54jCvjlLzKSXtXnK1pJrqdb6xplK8oVLWtHihVi4yWcPHma6PzmoLdHpH8nW/OJlRZ2pyREdo3Jv8Acen9Pc/5rNE3s7GVLWvV1GjHNCq+Ooop+81G1ni/Jk3nPpLl2d0Khp1BWtupKnGU5JSk5vMnl836TJTgnyaznuYicnUxfLbDl7Z7XZWN1RuYNVHRlHLi+U6bTUo+x/UXpa7x9JqUlV91wi2s9jLPbJ+HAurPtqu77S7qbqztIxk/xqUpUsvxai8P2GMjun0pfi1/R2z+4qbVt7ba1be2g7Ta8tRuZV+cYxxGlF4yod+cd76m2bAbOTqyhc1qbjTg1KCllOpLOU0vk9PYbZo+xWnWc1UpWy4l0nOUqkl6OJvHqNiSSKnl6yqbW2Mh4tXpylQnwLMlHiiuuWueCuqd7KcsSawm0+XQtJowWq7LW1y5TcXTnLGZweG+fVro2OHl8PbnjC6FrHufigoSnB8+XVS78eY/eq6pWvn7mo05Ri8OXjjxbT5RPfabI04Pyq1SovkvhivXwoz1taQpR4IRUV5vvL5OTjmfKI7ZESr20pRSeebTa9jM/s0o06jbxHjil4c8nvhs1RXRy9qPTS0alHHOXtKvz1tXDJ16NRqxVKabXlRaxnrk1hSiljhxg2Wpp1OWE8+SsLDxyPjLRKL6qX9o48d61jtrG6FqFPtJwcox4ksZaWWsmyJmEey1r4VP7xmXoU1CMYLpFJLveEZyWradhry65bOtbVqS5uUHheLXNf4FD6lOcOJNNYbTXRp+f2M6GwYPWtlbO9fHWo+VhrtISlTnj0x6+s3i5fDpsT/qrNitvPwdCdGtSlUpyk6kXDCnGTST+E0muR7doNtq+tNaXYUJxVfyKjmk5ODaznDahHxZttHdhpkXxdnVl1XC600sP0YZs+laRb2cFSt6MKUV3RWG/S+r9Yteszq5tX8OUdXtnQr1rdtSdGpOlJrOHKLaeM9xue5PaO2sbyvG5rRoxuKUYxqVGowUoSbSlJ9M5Za9zuw0erUnVnaycqkpTk/dFdZlJtt4UvFs+L3S6I/+zf5xcf7iJtqp5ImMbN+H7L+eW399T+8GB/a10n+bT/OK/wDuBLjkNxAAAAAAAAAAAEEgAAAAAAAAAAAAAAEEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAgEgCAAAAJAgAkCACQIBIAgAkCASAIAAAAAAAAAJAgEgCASAAAAAACESQiQABABEkIkAAAAAAAAAAQwJAAEIkhEgAABBJBIAAAAAAIAAAkAQgABJAABBkgCESABDDJAEAACUQwAJAAEIkACGSABAAAMkAAAAP/9k=">	

	<!--Divs and spans can be used to logically and structurally organize your page
		Here we use divs to separate different sections of the page: about, courses, interests and pet information
		* divs are block elements and are separated by newlines or breaks in the page
		* spans are inline elements and are displayed without newlines between them
	-->

	<!--Each div (and any other tag) can have a class and id.
		The class can be shared with other tags.
		The id is unique to this tag.
		The class and id can be selected by CSS rules to style groups of elements differently.
	-->
	<div class="section" id="about">
		<!--An h2 header - smaller than the h1 header-->
		<h2>About</h2>

		<!--<p> tags are paragraphs have newlines before and after them-->
		<p>hello !</p>
		<!--The <a> tag is a link.
			The text between the <a> and </a> tags is the displayed text.
			The href attribute has the link's target URL.-->
		<p>Hi, I'm Noura I love <a href="http://en.wikipedia.org/wiki/User_interface_design">User Interface Design</a>.</p>		
	</div>

	<div class="section" id="courses">
		<h2>Courses</h2>
		<p>Here are the courses I am currently taken:</p>

		<!--Tables can be used to group text or images into rows and columns-->
		<table>
			<!--Each <tr> is a row-->
			<tr>
				<!--Each <th> or <td> is a cell.
					The number of cells in a row determines the number of columns in the table.
				-->
				<th>Course Number</th>
				<th>Course Title</th>
				<th>Semester Taken</th>
			</tr>
			<tr>
				<!--A <td> or cell can span multiple columns using the colspan attribute-->
				<td class="enrollheader" colspan=3>For Credit</td>
			</tr>
			<!--We give certain rows the "currentlytaking" class, so we can color them differently in a CSS rule-->
			<tr class="currentlytaking">
				<td><a CSC440>6.813</a></td>
				<td>User Interface Design</td>
				<td>Spring 2017</td>
			</tr>			
			<tr>
				<td><a CSC361>6.034</a></td>
				<td>Artificial Intelligence</td>
				<td>Fall 2014</td>
			</tr>
			<tr>
				<td><a CSC444>6.006</a></td>
				<td>Introduction to Algorithms</td>
				<td>Fall 2013</td>
			</tr>
			<tr>
				<td class="my " colspan=3>Listener</td>
			</tr>
			<tr>
				<td><a href="http://stellar.mit.edu/S/course/6/fa13/6.867/">6.867</a></td>
				<td>Machine Learning</td>
				<td>Fall 2013</td>
			</tr>
			<tr>
				<td><a href="http://db.csail.mit.edu/6.830/index.php">6.830</a></td>
				<td>Database Systems</td>
				<td>Fall 2012</td>
			</tr>
		</table>
	</div>

	<div class="section" id="interests">
		<h2>Interests</h2>
		<!--Spans are displayed inline, but allow you to identify text in CSS rules-->
		I am interested <span class="serious">HCI</span>, <span class="silly">AI</span>, and <span class="silly">youtube videos</span>.
	</div>


	<!--This is the style section.
		It consists of CSS rules, which could also be included as a separate file.-->
	
</body>
</html>
