			<?php
				$fp = fopen($_SERVER["DOCUMENT_ROOT"] . "/count.txt", "r");
				$count = fread($fp, 1024);
				fclose($fp);
				$count = $count + 1;
				echo "$count";
				$fp = fopen($_SERVER["DOCUMENT_ROOT"] . "/count.txt", "w");
				fwrite($fp, $count);
				fclose($fp);
			?> 